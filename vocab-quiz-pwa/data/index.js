// ===== 題庫總表 =====
// 新增題庫：把檔案放進 data 資料夾，再把檔名加到下面的清單即可（順序＝選單順序）
const VOCAB_SETS = [];
const VOCAB_FILES = [
  "toeic.js",
  "toeic-review.js",  // TOEIC 複習單字（整份隨機、不重複）
  "junior.js",    // 國中單字（第1~12課）
  "senior.js",    // 高中單字（Level 1~6）
  "similar.js",   // 相似單字（一頁一組）
  "law-vocab.js", // 法律英文字彙（14 個法規）
  "junior1200.js", // 國中1200 主題字彙（可用拼字測驗）
  "phrases-dixson.js", // 片語（單字測驗 + 選擇題的片語測驗）
];

// 選擇題題庫檔（同樣放在 data 資料夾；順序＝選單順序）
const MCQ_FILES = [
  "mcq-junior.js",
  "mcq-senior.js",
  "mcq-toeic.js",
];
