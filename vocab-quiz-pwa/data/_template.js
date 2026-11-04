// ===== 題庫範本：複製這個檔案，改名（如 junior.js），再到 index.js 加入檔名 =====
VOCAB_SETS.push({
  id: "junior",                 // 題庫代號（不可與其他題庫重複）
  name: "國中單字",              // 選單顯示的名稱
  groupLabel: "課",              // 群組的叫法：類別 / 課 / 單元 ...
  // pool: true,                // 選填：true＝整份題庫當一個清單，隨機抽、不重複，抽完結束（不顯示類別選擇）
  // byGroup: true,             // 選填：true＝一頁出一整個群組（適合相似字題庫）
  groups: [
    { name: "第1課", items: [
      ["apple", "蘋果", "n."],                         // 基本：英文、中文、詞性
      ["borrow", "借入", "v.", "word", ["lend"]],      // 詞性、題型、相似/易混淆字
      {en: "quiet", zh: "安靜的", pos: "adj.", sim: ["quite"]},   // 物件寫法
    ]},
    { name: "第2課", items: [
      ["ice cream", "冰淇淋", "n."],
    ]},
    { name: "第1課 片語", kind: "phrase", items: [        // kind 可設在整個群組：word 單字 / phrase 片語
      ["look for", "尋找"],
      ["take care of", "照顧"],
    ]},
  ]
});
