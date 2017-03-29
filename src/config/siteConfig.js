const siteConfig = {
    readcomics_tv: {
        parser: 'readcomics_tv',
        pattern: /^(https?:\/{2}w{3}\.readcomics\.tv\/([^\/]+)\/chapter-[\d]+)/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//readcomics.tv',
        icon: '',
        logo: 'http://www.readcomics.tv/images/site/front/logo4.png',
        origins: []
    },

    readcomiconline_to: {
        parser: 'readcomiconline_to',
        pattern: /^(https?:\/{2}readcomiconline\.to\/Comic\/[^\/]+\/[^\/]+\?id=([\d]+))/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//readcomiconline.to',
        icon: '',
        logo: 'http://readcomiconline.to/Content/images/logo.png',
        origins: []
    },

    dm5_com: {
        parser: 'dm5_com',
        pattern: /^https?:\/{2}w{3}\.dm5\.com\/m([\d]+)(?:-p[\d]+)?\/?/i,
        site: '//dm5.com',
        icon: '',
        logo: 'http://js16.tel.cdndm.com/v201703101145/default/images/newImages/index_main_logo.png',
        origins: []
    },

    'dm5_com-mob': {
        parser: 'dm5_com-mob',
        pattern: /^https?:\/{2}m\.dm5\.com\/m([\d]+)(?:-p[\d]+)?\/?/i,
        site: '//m.dm5.com',
        icon: '',
        logo: 'http://js16.tel.cdndm.com/v201703101145/default/images/newImages/index_main_logo.png',
        origins: []
    },

    mangapanda_com: {
        parser: 'mangapanda_com',
        pattern: /^(https?:\/{2}(?:w{3}\.)?mangapanda\.com\/[^\/]+\/(\d+))(?:\/\d+)?/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//www.mangapanda.com',
        icon: 'http://s1.mangapanda.com/favicon.ico',
        logo: 'http://s5.mangapanda.com/sup/images/dark.813ab89088.png',
        origins: []
    },

    /* diff domain readms.com */
    mangastream_com: {
        parser: 'mangastream_com',
        pattern: /^(https?:\/{2}(?:w{3}?\.)?(?:mangastream\.com|readms\.net|readms\.com)\/r\/[^\/]+\/[^\/]+\/(\d+))(?:\/\d+)?\/?/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//mangastream.com',
        icon: '',
        logo: 'http://mangastream.com/assets/img/logo.png',
        origins: []
    },

    eatmanga_com: {
        parser: 'eatmanga_com',
        pattern: /^(https?:\/{2}(?:w{3}\.)?eatmanga\.com\/Manga-Scan\/([^\/]+)\/([^\/]+))/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//eatmanga.com',
        icon: '',
        logo: 'http://cdn.eatmanga.com/media/logo.png',
        origins: []
    },

    kissmanga_com: {
        parser: 'kissmanga_com',
        pattern: /^(https?:\/{2}kissmanga\.com\/Manga\/[^\/]+\/[^\/]+\?id=(\d+))/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//kissmanga.com',
        icon: '',
        logo: 'http://kissmanga.com/Content/images/logo.png',
        origins: []
    },

    mangadoom_co: {
        parser: 'mangadoom_co',
        pattern: /^(https?:\/{2}mangadoom\.co\/([^\/]+)\/\d+)/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//mangadoom.do',
        icon: '',
        logo: 'http://mangadoom.co/assets/img/lgo.png',
        origins: []
    },

    mangapark_me: {
        parser: 'mangapark_me',
        pattern: /^(https?:\/{2}(?:w{3}?\.)?mangapark\.me\/manga\/([^\/]+)\/s\d+(?:\/v\d+)?\/c\d+(?:\/e\d+)?)/i,
        groups: { url: 1, mroot: 1, id: 2 },
        site: '//mangapark.me',
        icon: '',
        logo: 'http://h.s.mangapark.me/img/logo.png',
        origins: [],
        nsfw: true
    }
}

export default siteConfig;