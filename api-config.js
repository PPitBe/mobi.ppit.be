// API 설정
const API_CONFIG = {
    BASE_URL: 'https://api.m-inbody.info/api/v1',
    SEASON: 1,

    // API 엔드포인트
    ENDPOINTS: {
        RANKINGS_CLASSES: '/rankings/classes',
        ITEMS_WEAPON: '/items/type/WEAPON',
        ITEMS_ARMOR: '/items/type/ARMOR',
        ITEMS_EMBLEM: '/items/type/EMBLEM',
        ITEMS_ACC: '/items/type/ACC',
        USER_STATISTICS: '/user_records/statistics'
    },

    // 전체 URL 생성 함수
    getURL(endpoint, includeSeason = true) {
        const url = this.BASE_URL + endpoint;
        return includeSeason ? `${url}?season=${this.SEASON}` : url;
    },

    // 각 API URL을 쉽게 가져오기
    get urls() {
        return {
            rankingsClasses: this.getURL(this.ENDPOINTS.RANKINGS_CLASSES, false),
            itemsWeapon: this.getURL(this.ENDPOINTS.ITEMS_WEAPON),
            itemsArmor: this.getURL(this.ENDPOINTS.ITEMS_ARMOR),
            itemsEmblem: this.getURL(this.ENDPOINTS.ITEMS_EMBLEM),
            itemsAcc: this.getURL(this.ENDPOINTS.ITEMS_ACC),
            userStatistics: this.getURL(this.ENDPOINTS.USER_STATISTICS)
        };
    }
};
