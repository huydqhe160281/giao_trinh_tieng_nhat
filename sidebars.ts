import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar: intro → bảng chữ cái → 25 bài Minna.
 */
const sidebars: SidebarsConfig = {
  lessonSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Bảng chữ cái',
      collapsed: false,
      link: {type: 'doc', id: 'kana/tong-quan'},
      items: [
        'kana/tong-quan',
        'kana/hiragana',
        'kana/katakana',
        'kana/tenten-maru',
        'kana/youon-sokuon',
        'kana/luyen-doc',
      ],
    },
    {
      type: 'category',
      label: '25 bài Minna N5',
      collapsed: false,
      items: [
        'bai-01-cau-danh-tu',
        'bai-02-chi-thi-tu',
        'bai-03-dia-diem',
        'bai-04-thoi-gian',
        'bai-05-dong-tu-di-den-ve',
        'bai-06-tan-ngu-o',
        'bai-07-tro-tu-de-ni-he',
        'bai-08-tinh-tu',
        'bai-09-co-o',
        'bai-10-ton-tai-vi-tri',
        'bai-11-muon-lam',
        'bai-12-thi-qua-khu',
        'bai-13-thich-muon-co',
        'bai-14-the-te-nho-va',
        'bai-15-duoc-phep-cam',
        'bai-16-noi-cau-the-te',
        'bai-17-dung-phai-lam',
        'bai-18-the-dictionary-kha-nang',
        'bai-19-tung-trai-liet-ke',
        'bai-20-du-dinh-y-dinh',
        'bai-21-nghi-noi-rang',
        'bai-22-menh-de-bo-nghia',
        'bai-23-khi-luc',
        'bai-24-cho-nhan',
        'bai-25-dieu-kien',
      ],
    },
  ],
};

export default sidebars;
