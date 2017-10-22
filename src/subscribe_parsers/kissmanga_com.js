import * as Common from '../modules/common';
import _ from '../modules/_';
import XHR from '../modules/XHR';
import BaseParser from './BaseParser';

class Parser extends BaseParser {

    constructor () {
        super('kissmanga_com');

        return new Promise((resolve, reject) => {
            resolve(this);
        });
    }

    getMangaURL () {
        return [this.site, 'Manga', this.id].join('/');
    }

    getChapterURL () {
        return [];
    }

    sync () {
        return new Promise((resolve, reject) => {
            let xhr = XHR();
            xhr.open('get', this.getMangaURL());
            xhr.onload = () => {
                let domparser = new DOMParser();
                let elements = domparser.parseFromString(xhr.responseText, 'text/html');
                let lastestChapterEl = elements.querySelector('.listing a');
                this.lastestChapterId = /id=(\d+)/.exec(lastestChapterEl.getAttribute('href'))[1];
                this.lastestChapterTitle = lastestChapterEl.innerText;
                this.title = elements.querySelector('.bigChar').innerText;
                this.lastTime = Date.now();
                this.extras.chapterStr = /([^\/]+)\?id/.exec(lastestChapterEl.getAttribute('href'))[1];

                resolve(this.toJSON());
            };
            xhr.send(null);
        });
    }

    saveSubscribe () {
        return new Promise((resolve, reject) => {
            let xhr = XHR();
            xhr.open('get', this.getMangaURL());
            xhr.onload = () => {
                let domparser = new DOMParser();
                let elements = domparser.parseFromString(xhr.responseText, 'text/html');
                let lastestChapterEl = elements.querySelector('.listing a');
                this.lastestSavedChapterId = this.lastestChapterId = /id=(\d+)/.exec(lastestChapterEl.getAttribute('href'))[1];
                this.lastestChapterTitle = lastestChapterEl.innerText;
                this.title = elements.querySelector('.bigChar').innerText;
                this.lastTime = Date.now();
                this.extras.chapterStr = /([^\/]+)\?id/.exec(lastestChapterEl.getAttribute('href'))[1];;

                super.saveSubscribe(resolve, reject);
            };
            xhr.send(null);
        });
    }
}

export default Parser;