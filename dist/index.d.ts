/// <reference types="request" />
import * as request from 'request';
export default class OfferUp {
    baseHost: string;
    private timeout;
    private offerupConfigPath;
    private token;
    constructor();
    private checkToken();
    /**
     * Account APIs. Token required!
     */
    getMyProfile(): Promise<OfferUpUserResult>;
    getAccountPayment(): Promise<OfferUpAccountPayment>;
    getAccountPaymentHistory(): Promise<OfferUpAccountPaymentHistory>;
    getBoardsList(): Promise<OfferUpBoardsList>;
    getUserRelation(userid: number): Promise<OfferUpUserRelation>;
    offerPrice(itemid: number, price: number): Promise<OfferUpItemOffer>;
    authorize(username: string, password: string, options?: any): Promise<OfferUpUserResult>;
    /**
     * Gets user by id
     * @param userid
     */
    getUser(userid: number): Promise<OfferUpProfileResult>;
    /**
     * Gets all categories
     */
    getCategories(): Promise<OfferUpCategoriesResult>;
    /**
     * Gets all lists
     */
    getLists(): Promise<OfferUpListsResult>;
    /**
     * Get item by id
     * @param itemid
     */
    getItem(itemid: number): Promise<OfferUpItemResult>;
    private postRequest(url, data);
    private basePostRequst(url, body);
    private baseRequest(url, requestOptions?);
}
export interface OfferUpRequestOptions {
    returnBody?: boolean;
    checkBodyStatus?: boolean;
    method?: string;
    headers?: request.Headers;
    body?: any;
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
    };
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
    };
    approximate_location?: {
        latitude?: number;
        longitude?: number;
    };
    feature_attributes?: any;
    identity_attributes?: {
        is_truyou_member?: boolean;
        is_autos_dealer?: boolean;
        autos_dealer_payment_info_on_file?: boolean;
        is_small_business?: boolean;
        potential_autos_seller?: boolean;
    };
    background_image?: {
        small?: {
            url?: string;
            width?: number;
            height?: number;
        };
        large?: {
            url?: string;
            width?: number;
            height?: number;
        };
        medium?: {
            url?: string;
            width?: number;
            height?: number;
        };
    };
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
        };
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
    };
    feature_attributes: any;
    click_to_call_enabled: boolean;
    identity_attributes?: {
        is_truyou_member?: boolean;
        is_autos_dealer?: boolean;
        autos_dealer_payment_info_on_file?: boolean;
        is_small_business?: boolean;
        potential_autos_seller?: boolean;
    };
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
    };
    latitude: string;
    longitude: string;
    priority: string;
    watched: boolean;
    discussions: {
        unread_count: number;
    };
    item_actions: any;
    generic_attributes: [any];
    state: number;
    sort_label: any;
    buyer_can_meet_local: boolean;
    reserved: boolean;
    p2p_attributes: {
        p2p_item_payable: boolean;
    };
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
    };
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
    item: OfferUpItem;
    operation_context: string;
}
export interface OfferUpPhoto {
    images: {
        detail_full: {
            url: string;
            width: number;
            height: number;
        };
        list: {
            url: string;
            width: number;
            height: number;
        };
        detail: {
            url: string;
            width: number;
            height: number;
        };
        uuid: string;
    };
}
export interface OfferUpUserResult {
    token: string;
    user: OfferUpProfile;
    features: {
        payments: boolean;
    };
}
export interface OfferUpAccountPayment {
    info_needed: [{
        action_path: string;
    }];
    supported_payment_methods: [string];
    payment_methods: [any];
    payment_user_data: {
        acknowledged_payments: boolean;
        opt_in_to_instant_payouts: boolean;
        payment_enabled: any;
    };
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
export interface OfferUpUserRelation {
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
        };
        request_status: number;
        require_payments: boolean;
    };
}
