// assets/content-map.js
// 站点内容分区与搜索功能

const siteContentMap = {
  baseUrl: "https://mindex-aiyouxi.com.cn",
  primaryTag: "爱游戏",
  sections: [
    {
      id: "news",
      title: "最新资讯",
      keywords: ["爱游戏", "新游发布", "行业动态"],
      items: [
        { title: "爱游戏2024年度回顾", url: "/news/2024-review" },
        { title: "热门手游排行榜更新", url: "/news/ranking-update" }
      ]
    },
    {
      id: "reviews",
      title: "游戏评测",
      keywords: ["爱游戏", "测评", "游戏评分"],
      items: [
        { title: "《星穹之刃》深度评测", url: "/reviews/star-blade" },
        { title: "经典RPG重制版体验", url: "/reviews/rpg-remake" }
      ]
    },
    {
      id: "guides",
      title: "攻略教程",
      keywords: ["爱游戏", "攻略", "新手教学"],
      items: [
        { title: "新手入门指南", url: "/guides/newbie" },
        { title: "隐藏任务解锁方法", url: "/guides/hidden-quests" }
      ]
    },
    {
      id: "community",
      title: "玩家社区",
      keywords: ["爱游戏", "论坛", "玩家交流"],
      items: [
        { title: "玩家作品展示", url: "/community/artworks" },
        { title: "近期活动汇总", url: "/community/events" }
      ]
    }
  ]
};

function getSectionById(sectionId) {
  return siteContentMap.sections.find(s => s.id === sectionId) || null;
}

function searchInSections(query) {
  const lowerQuery = query.toLowerCase();
  const results = [];
  siteContentMap.sections.forEach(section => {
    const matchedItems = section.items.filter(item =>
      item.title.toLowerCase().includes(lowerQuery) ||
      section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery))
    );
    if (matchedItems.length > 0) {
      results.push({
        sectionTitle: section.title,
        sectionId: section.id,
        matchedItems: matchedItems
      });
    }
  });
  return results;
}

function getFeaturedContent() {
  const featured = [];
  siteContentMap.sections.forEach(section => {
    if (section.items.length > 0) {
      featured.push({
        section: section.title,
        link: section.items[0]
      });
    }
  });
  return featured;
}

function countAllItems() {
  let count = 0;
  siteContentMap.sections.forEach(s => count += s.items.length);
  return count;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    siteContentMap,
    getSectionById,
    searchInSections,
    getFeaturedContent,
    countAllItems
  };
}