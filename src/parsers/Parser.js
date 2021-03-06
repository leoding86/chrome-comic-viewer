import { _ua, _r } from '../modules/common';
import WatchHistory from '../models/WatchHistory';

class Parser {

    constructor (name, url) {
        this.PROCESSING = 1;
        this.COMPLETED = 2;

        this.name = name;
        this.link = null;
        this.title = '';
        this.totalPage = 0;
        this.datasets = [];
        this.watchHistory = null;
        this.siteConfig = _r[this.name];
        this.pattern = this.siteConfig.pattern;
        this.siteurl = this.siteConfig.site;
        this.icon = this.siteConfig.icon;
        this.sitelogo = this.siteConfig.logo;
        this.resOrigin = this.siteConfig.origins;

        let matches = this.pattern.exec(url);
        this.mroot = matches[this.siteConfig.groups.mroot];
        this.url = matches[this.siteConfig.groups.url];
        this.id = matches[this.siteConfig.groups.id];

        // 修改请求头信息
        // this.webRequestModifyHeader();
    }

    // webRequestModifyHeader () {
    //     let _this = this;
    //     chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    //         details.requestHeaders.push({
    //             name: "Referer",
    //             value: _this.geturl()
    //         }, {
    //             name: "User-Agent",
    //             value: _ua
    //         });
    //         let headers = details.requestHeaders;
    //         return { requestHeaders: headers };
    //     }, { urls: _this.resOrigin }, [ 'requestHeaders', 'blocking' ]);
    // }

    /**
     * Check is the site disabled
     * 
     * @return {Boolean}
     */
    isDisabled () {
        return Boolean(this.siteConfig.disabled);
    }

    getId () {
        return this.id;
    }

    getIcon () {
        return this.icon;
    }

    geturl () {
        return this.url;
    }

    getHistoryTitle () {
        return document.querySelector('title').textContent;
    }

    getSiteurl () {
        return this.siteurl;
    }

    getSitelogo () {
        return this.sitelogo;
    }

    getTotalPage () {
        return this.totalPage;
    }

    isValidIndex (index) {
        return index <= this.totalPage - 1;
    }

    /**
     * Create a WatchHistory instance
     * Call this after init parser to get related props
     * @return {[type]} [description]
     */
    createHistoryInstance () {
        this.watchHistory = new WatchHistory(
            this.getId(),
            this.getIcon(),
            this.getLink(),
            this.getHistoryTitle()
        );
    }

    /**
     * Save watch history
     * @return {null|void}
     */
    saveHistory (page) {
        if (this.watchHistory) {
            this.watchHistory.save(page);
        }
    }
}

export default Parser;