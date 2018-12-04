import * as HTTPStatus from 'http-status';
import * as https from 'https';
import * as cloudscraper from 'cloudscraper';
import * as request from 'request';
import formurlencoded from 'form-urlencoded';
import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';

export default class OfferUp {
    public baseHost = 'https://api.offerupnow.com/api/v2';

    private timeout = 5000;
    private offerupConfigPath: string = '';

    private token: string | undefined = undefined;

    constructor(){
    }

    private checkToken(): void {
        if(!this.token){
            throw Error('Token is not defined. Please use OfferUp.authorize() to get token.');
        }
    }

    /**
     * Account APIs. Token required!
     */
    public getMyProfile(): Promise<OfferUpUserResult> {
        this.checkToken();

        return this.baseRequest(`${this.baseHost}/user/me/`);
    }

    public getAccountPayment(): Promise<OfferUpAccountPayment> {
        this.checkToken();

        return this.baseRequest(`${this.baseHost}/user/me/payment-account/`);
    }

    public getAccountPaymentHistory(): Promise<OfferUpAccountPaymentHistory> {
        this.checkToken();

        return this.baseRequest(`${this.baseHost}/user/me/payment-history/`);
    }

    public getBoardsList(): Promise<OfferUpBoardsList> {
        this.checkToken();
        
        return this.baseRequest('https://api.offerupnow.com/api/offer_boards/v1/boards/');
    }

    public getUserRelation(userid: number): Promise<OfferUpUserRelation> {
        this.checkToken();

        if(!userid || typeof userid !== 'number') {
            throw Error('Userid is invalid or missing');
        }

        return this.baseRequest(`${this.baseHost}/userrelation/${userid}`, {
            checkBodyStatus: false,
            returnBody: true
        });
    }

    public offerPrice(itemid: number, price: number): Promise<OfferUpItemOffer> {
        this.checkToken();

        if(!itemid || typeof itemid !== 'number'){
            throw Error('ItemId is invalid or missing');
        }

        if(!price || typeof price !== 'number'){
            throw Error('Price is invalid or missing');
        }


        return this.basePostRequst(`${this.baseHost}/item/${itemid}/offer/`, 'offer=' + price);
    }

    public authorize(username: string, password: string, options: any = {useDefault: true}): Promise<OfferUpUserResult> {
        if(!username || !password){
            throw Error('Username or password not defined.');
        }

        if(options.useDefault){
            this.offerupConfigPath = path.resolve(__dirname, './../.offerup');

            let offerupConfig;

            if(fs.existsSync(this.offerupConfigPath)){
                offerupConfig = fs.readFileSync(this.offerupConfigPath, {
                    encoding: 'utf8'
                });

                let offerupSettings = _.split(offerupConfig, ':');

                if(offerupSettings.length == 2 && username == offerupSettings[1]){
                    this.token = offerupSettings[0];
                    return this.baseRequest('https://api.offerupnow.com/api/v2/user/me');
                }
            }
        }

        return new Promise((resolve, reject) => {
            this.postRequest('https://api.offerupnow.com/api/v2/user/me', {username: username, password: password}).then((data: any) => {
                if(options.useDefault && data.session && data.session.token && this.offerupConfigPath && !fs.existsSync(this.offerupConfigPath)){
                    fs.writeFileSync(this.offerupConfigPath, `${data.session.token}:${username}`, {
                        encoding: 'utf8'
                    });
                    this.token = data.session.token;
                }
                resolve(data);
            }).catch((err: any) => {
                reject(err);
            }) 
        })
    }

    /**
     * Search function
     */
    public search(options: OfferUpSearchOptions): Promise<OfferUpSearchResult> {
        return this.baseRequest(`https://api.offerupnow.com/api/search/v4/feed/?${formurlencoded(options)}`);
    }


    /**
     * Gets user by id
     * @param userid
     */
    public getUser(userid: number): Promise<OfferUpProfileResult> {
        if(!userid || typeof userid !== 'number'){
            throw Error('userid is not valid or missing.');
        }

        return this.baseRequest(`${this.baseHost}/user/${userid}`);
    }

    /**
     * Gets all categories
     */
    public getCategories(): Promise<OfferUpCategoriesResult> {
        return this.baseRequest(`${this.baseHost}/categories/`);
    }

    /**
     * Gets all lists
     */
    public getLists(): Promise<OfferUpListsResult> {
        return this.baseRequest(`${this.baseHost}/itemlists/`);
    }

    /**
     * Get item by id
     * @param itemid
     */
    public getItem(itemid: number): Promise<OfferUpItemResult> {
        if(!itemid || typeof itemid !== 'number'){
            throw Error('itemid is not valid or missing.');
        }

        return this.baseRequest(`${this.baseHost}/item/${itemid}`);
    }

    private postRequest(url: string, data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            try{
                request({
                    url: url,
                    body: formurlencoded(data),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*'
                    }
                }, (err: any, response: any, body: any) => {
                    if(err){
                        reject(err);
                        return;
                    }

                    if (response.statusCode !== HTTPStatus.OK) {
                        reject(new Error(`Unexpected status code: ${response.statusCode}`));
                        return;
                    }

                    if (typeof body == 'undefined') {
                        reject(new Error(`Unexpected response from offerup: body is undefined`))
                    }

                    body = JSON.parse(body);

                    if (typeof body.status == 'undefined' || body.status.code !== '200') {
                        reject(new Error(`Unexpected response from offerup: ${body.status}`));
                    }

                    if(body.data.token){
                        this.token = body.data.token;
                    }

                    resolve(body.data);
                })
            }catch(e){
                reject(e);
            }
        })
    }
    

    private basePostRequst(url: string, body: string): Promise<any>{
        return new Promise((resolve, reject) => {
            try{
                const options = {
                    url: url,
                    body: body,
                    method: 'POST',
                    encoding: 'UTF8',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': '*/*',
                        'Cookie': 'sessionid=' + this.token
                    }
                }
                
                cloudscraper.request(options, (err: any, response: any, body: any) => {
                    if(err){
                        reject(err);
                        return;
                    }

                    if (response.statusCode !== HTTPStatus.CREATED) {
                        reject(new Error(`Unexpected status code: ${response.statusCode}`));
                        return;
                    }

                    if (typeof body == 'undefined') {
                        reject(new Error(`Unexpected response from offerup: body is undefined`))
                    }

                    body = JSON.parse(body);

                    resolve(body.data);
                })
            }catch(e){
                reject(e);
            }
        })
    }
 
    private baseRequest(url: string, requestOptions: OfferUpRequestOptions = {checkBodyStatus: true, returnBody: false}): Promise<any> {
        return new Promise((resolve, reject) => {
            try{
                const options: any = {
                    url: url,
                    method: requestOptions.method || 'GET',
                    timeout: this.timeout,
                    followAllRedirects: true
                }

                let headers = {};

                if(this.token){
                    Object.defineProperty(headers, 'Cookie', {
                        writable: true,
                        enumerable: true,
                        value: `sessionid=${this.token}`
                    })
                }

                if(requestOptions.body){
                    options.body = formurlencoded(requestOptions.body);
                }

                if(requestOptions.method == 'POST'){

                    options.encoding = null;

                    Object.defineProperty(headers, 'Content-Type', {
                        writable: true,
                        enumerable: true,
                        value: `application/x-www-form-urlencoded`
                    })

                    Object.defineProperty(headers, 'Accept', {
                        writable: true,
                        enumerable: true,
                        value: `*/*`
                    })
                }

                if(_.size(headers) > 0){
                    options.headers = headers;
                }
                
                cloudscraper.request(options, (err: any, response: any, body: any) => {
                    if(err){
                        reject(err);
                        return;
                    }

                    if (response.statusCode !== HTTPStatus.OK) {
                        reject(new Error(`Unexpected status code: ${response.statusCode}`));
                        return;
                    }

                    if (typeof body == 'undefined') {
                        reject(new Error(`Unexpected response from offerup: body is undefined`))
                    }

                    body = JSON.parse(body);

                    if(requestOptions.checkBodyStatus){
                        if (typeof body.status == 'undefined' || +body.status.code !== 200) {
                            reject(new Error(`Unexpected response from offerup: ${body.status}`));
                        } 
                    }

                    if(requestOptions.returnBody){
                        resolve(body);
                        return;
                    }

                    resolve(body.data);
                })
            }catch(e){
                reject(e);
            }
        })
    }
}

export interface OfferUpSearchOptions {
    q: string;
    lid: number;
    zipcode: number;
    lon: string;
    lat: string;
    limit: number;
    accuracy: number;
    sort: 'distance' | 'price' | '-price';
    price_min: number;
    price_max: number;
    delivery_param: 'p' | 's';
}

export interface OfferUpRequestOptions {
    returnBody?: boolean;
    checkBodyStatus?: boolean;
    method?: string;
    headers?: request.Headers;
    body?: any
}

export interface OfferUpResponse<T> {
    status: OfferUpStatus;
    data: T;
}

export interface OfferUpStatus {
    status: string;
    message: string;
    code: number;
    server_time: Date;
}

export interface OfferUpCategoriesResult {
    total: number;
    categories: [OfferUpCategory];
}

export interface OfferUpCategory {
    bump_sku_ios: string | null;
    id: number;
    bump_sku_android: string | null;
    name: string;
}

export interface OfferUpListsResult {
    total: number;
    item_lists: [OfferUpList];
}

export interface OfferUpList {
    sort: number;
    user_required: number;
    image_square_url: string;
    description: string;
    image_medium_height: number;
    image_medium_url: string;
    parsed_query: {
        category_id: number;
        order_by: string;
        max_price: number;
        priority_max: number;
    }
    image_medium_width: number;
    id: number;
    name: string;
}

export interface OfferUpProfileResult { 
    profile: OfferUpProfile;
}

export interface OfferUpProfile {
    id: number;
    user_id?: number;
    rating?: {
        count?: number;
        average?: number;
    }
    approximate_location?: {
        latitude?: number;
        longitude?: number;
    }
    feature_attributes?: any;
    identity_attributes?: {
        is_truyou_member?: boolean;
        is_autos_dealer?: boolean;
        autos_dealer_payment_info_on_file?: boolean;
        is_small_business?: boolean;
        potential_autos_seller?: boolean;
    }
    background_image?: {
        small?: {
            url?: string;
            width?: number;
            height?: number;
        }
        large?: {
            url?: string;
            width?: number;
            height?: number;
        }
        medium?: {
            url?: string;
            width?: number;
            height?: number;
        }
    }
    verified?: number;
    payments_verified?: boolean;
    is_phone_number_verified?: boolean;
    followers?: number;
    uses_default_avatar?: boolean;
    public_location_name?: string;
    click_to_call_enabled?: boolean;
    is_email_verified?: boolean;
    verification_status?: string;
    bio?: string | null;
    has_facebook?: boolean;
    name?: string;
    joined?: Date;
    following?: number;
    avatar_normal?: string;
    avatar_square?: string;
    avatar_large?: string;
    avatar_extra_large?: string;
    acknowledged_p2ppayments?: boolean;
    payment_commission_rate?: string;
    first_message_sent?: any;
    terms_accepted?: boolean;
    id_promotion_banner?: [any];
    newsletter?: boolean;
    acknowledged_payments?: boolean;
    payment_enabled?: number;
    first_payout_received?: any;
    seller_payment_enabled?: any;
    fanpage_id?: any;
    verified_phone_number?: any;
    facebook_id?: any;
    core_profile_attributes?: [Object];
    first_payment_made?: any;
    first_item_posted?: any;
    items_auto_archived?: boolean;
    website_link?: any;
    items_archived?: boolean;
    p2p_payment_seller_fee_rate?: string;
    added_card?: boolean;
    followers_ids?: [any];
    following_ids?: [any];
}

export interface OfferUpUser {
    id: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    get_profile: {
        rating: {
            count: number;
            average: number;
        }
        card_on_file: boolean;
        verified: number;
        payments_verified: boolean;
        avatar_normal: string;
        has_facebook: boolean;
        not_active: boolean;
        seller_payment_enabled: boolean;
        uses_default_avatar: boolean;
        avatar_square: string;
        public_location_name: string;
    }
    feature_attributes: any;
    click_to_call_enabled: boolean;
    identity_attributes?: {
        is_truyou_member?: boolean;
        is_autos_dealer?: boolean;
        autos_dealer_payment_info_on_file?: boolean;
        is_small_business?: boolean;
        potential_autos_seller?: boolean;
    }
    date_joined: Date;
}

export interface OfferUpItem {
    id: number;
    title: string;
    description: string;
    price: string;
    post_date_ago: string;
    post_date: Date;
    owner: OfferUpUser;
    get_full_url: string;
    location_name: string;
    category: {
        id: number;
        name: string;
    }
    latitude: string;
    longitude: string;
    priority: string;
    watched: boolean;
    discussions: {
        unread_count: number;
    }
    item_actions: any;
    generic_attributes: [any];
    state: number;
    sort_label: any;
    buyer_can_meet_local: boolean;
    reserved: boolean;
    p2p_attributes: {
        p2p_item_payable: boolean;
    }
    original_price: number;
    sold_offer: any;
    view_count_sliding_3_day: number;
    view_count_overall: number;
    shipping_attributes: {
        buy_it_now_enabled: boolean;
        seller_pays_shipping: boolean;
        show_as_shipped: boolean;
        can_ship_to_buyer: boolean;
        shipping_enabled: boolean;
        shipping_parcel_id: any;
        shipping_price: number;
    }
    paid: boolean;
    payable: boolean;
    discussion_count: any;
    new_reserve_count: any;
    offer_count: any;
    listing_type: number;
    condition: number;
    reservable: boolean;
    distance: any;
    post_from_store_address: string;
    best_offer: any;
    local_pickup_enabled: boolean;
    image: string;
    image_mob_det_hd: string;
    image_mob_list_hd: string;
    get_img_small_width: number;
    get_img_small_height: number;
    get_img_medium_width: number;
    get_img_medium_height: number;
    get_img_permalink_small: string;
    get_img_permalink_medium: string;
    get_img_permalink_large: string;
}

export interface OfferUpItemResult {
    item: OfferUpItem
    operation_context: string;
}

export interface OfferUpPhoto {
    images: {
        detail_full: {
            url: string;
            width: number;
            height: number;
        }
        list: {
            url: string;
            width: number;
            height: number;
        }
        detail: {
            url: string;
            width: number;
            height: number;
        }
        uuid: string;
    }
}

export interface OfferUpUserResult {
    token: string;
    user: OfferUpProfile;
    features: {
        payments: boolean;
    }
}

export interface OfferUpAccountPayment {
    info_needed: [
        {
            action_path: string
        }
    ];
    supported_payment_methods: [string];
    payment_methods: [any];
    payment_user_data: {
        acknowledged_payments: boolean;
        opt_in_to_instant_payouts: boolean;
        payment_enabled: any;
    },
    deposit_methods: [any];
    balance: string;
}

export interface OfferUpAccountPaymentHistory {
    total: number;
    history: [any];
}

export interface OfferUpBoard {
    id: string;
    name: string;
    description: string;
    is_public: boolean;
    is_quick_save: boolean;
    item_count: number;
    collaborator_count: number;
    access_level: number;
    photos: any;
}

export interface OfferUpBoardsList {
    boards: [OfferUpBoard];
    next_key: any;
}

export interface OfferUpUserRelation{
    blocked: any;
    following: any;
}

export interface OfferUpItemOffer {
    id: number;
    buy_request: {
        sold_date: Date;
        review_date: Date;
        request_date: Date;
        offer: string;
        payment_status: number;
        seller: OfferUpUser;
        buyer: OfferUpUser;
        item: {
            reservable: boolean;
            get_img_small_height: number;
            payable: boolean;
            price: string;
            title: string;
            paid: boolean;
            get_img_permalink_small: string;
            post_date_ago: string;
            get_img_small_width: number;
            id: number;
        },
        request_status: number;
        require_payments: boolean,
    }
}

export interface OfferUpSearchResult {
    search_data: {
        search_performed_event_unique_id: string;
        search_session_id: string;
    }
    feed_items: [{
        type: string;
        item: OfferUpItem;
        tile_id: string;
    }]
    feed_options: [
        {
            position: string;
            type: string;
            name: string;
            label: string;
            label_short: string;
            query_param: string;
            options: [
                {
                    label: string;
                    label_short: string;
                    value: string;
                }
            ]
        }
    ]
    next_page_cursor: string;
    search_alert: {
        alert_status: string;
    }
    query: string;
    feed_title: string;
    shipping_filter: {
        shipping_only_filter_enabled: boolean;
        shipping_only_filter_applied: boolean;
        intersperse_filter_applied: boolean;
    }
    operation_context: string;
}