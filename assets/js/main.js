const array_N = ['[馬用] ケーキ', '[馬用] 寿司', '[馬用] コーヒー豆', '[馬用] 高麗人参', '[馬用] ナツメヤシ', '[騎手用] ケーキ', '[騎手用] 寿司', '[騎手用] コーヒー豆', '[騎手用] 高麗人参', '[騎手用] ナツメヤシ'];
const array_R = ['アドマイヤベガ', 'ヴァーミリアン', 'エルコンドルパサー', 'カネヒキリ', 'グラスワンダー', 'ゴールドアリュール', 'スズカフェニックス', 'スペシャルウィーク', 'ゼンノロブロイ', 'タイキシャトル', 'タニノギムレット', 'ダノンプレミアム', 'ダンスインザダーク', 'トランセンド', 'バゴ', 'ビッグアーサー', 'フサイチコンコルド', 'フジキセキ', 'メジロマックイーン', 'モーニン'];
const array_SR = ['クロノロジスト', 'ケイアイガーベラ', 'コイウタ', 'サロミナ', 'サンドピアリス', 'ジェラルディーナ', 'ジェルミナル', 'ジュールポレール', 'ジュエラー', 'ショウリュウムーン', 'シルクプリマドンナ', 'スカーレットブーケ', 'スピニングワイルドキャット', 'スマートレイアー', 'ダイワパッション', 'チュウワブロッサム', 'ツルマルワンピース', 'デアリングハート', 'デアリングバード', 'テイエムプリキュア', 'ティコティコタック', 'トゥハーモニー', 'トールポピー', 'ハシッテホシーノ', 'ビッシュ', 'ファンディーナ', 'ブルーメンブラット', 'ベイトゥベイ', 'ホシニイノリヲ', 'ホットチャチャ', 'マラコスタムブラダ', 'マンデラ', 'ミスアンコール', 'ムードインディゴ', 'メイケイエール', 'メイショウマンボ', 'メーヴェ', 'メジロツボネ', 'ヤマカツリリー', 'ヨカヨカ', 'ライトカラー', 'ライフフォーセール', 'ライラックスアンドレース', 'ラヴズオンリーミー', 'リンゴアメ', 'レディパステル', 'ロードクロサイト', 'ロザリンド', 'ワイドサファイア', 'ワンカラット'];
const array_UR = ['カレンブーケドール', 'サラキア', 'シンコウラブリイ', 'スティンガー', 'ソウルスターリング', 'ダンスインザムード', 'ダンスパートナー', 'テスコガビー', 'トゥザヴィクトリー', 'ニシノフラワー', 'ハープスター', 'ビリーヴ', 'ファインモーション', 'フサイチエアデール', 'ブチコ', 'ホクトベガ', 'ユキチャン', 'ルージュバック', 'レシステンシア', 'レッツゴードンキ'];
const result = document.getElementById('result');
const pts = document.getElementById('points');
var points = 100000;

function choose(array, num) {
    let tmp_rslt = [];
    const array_len = array.length;
    for (let i = 0; i < num; i++) {
        const rnd = Math.floor(Math.random() * array_len);
        tmp_rslt += array[rnd] + ",";
    }
    return tmp_rslt;
}

function click1() {
    if(points < 500) return 0;
    const rnd = Math.floor(Math.random() * 10);
    let tmp_rslt = [];
    if (rnd > 0) {
        tmp_rslt += choose(array_R, 1);
        tmp_rslt += choose(array_N, 4);
        result.innerHTML = tmp_rslt.toString();
    }
    else {
        tmp_rslt += choose(array_SR, 1);
        tmp_rslt += choose(array_N, 4);
        result.innerHTML = tmp_rslt.toString();
    }
    points -= 500;
    pts.innerHTML = points + "pt";
}

function click2() {
    if(points < 1000) return 0;
    const rnd = Math.floor(Math.random() * 10);
    let tmp_rslt = [];
    if (rnd > 1) {
        tmp_rslt += choose(array_R, 2);
        tmp_rslt += choose(array_N, 8);
        result.innerHTML = tmp_rslt.toString();
    }
    else {
        tmp_rslt += choose(array_SR, 1);
        tmp_rslt += choose(array_R, 2);
        tmp_rslt += choose(array_N, 7);
        result.innerHTML = tmp_rslt.toString();
    }
    points -= 1000;
    pts.innerHTML = points + "pt";
}

function click3() {
    if(points < 2000) return 0;
    const rnd = Math.floor(Math.random() * 100);
    let tmp_rslt = [];
    if (rnd > 84) {
        tmp_rslt += choose(array_SR, 2);
        tmp_rslt += choose(array_R, 2);
        tmp_rslt += choose(array_N, 6);
        result.innerHTML = tmp_rslt.toString();
    }
    else if (rnd > 4) {
        tmp_rslt += choose(array_UR, 1);
        tmp_rslt += choose(array_SR, 1);
        tmp_rslt += choose(array_R, 2);
        tmp_rslt += choose(array_N, 6);
        result.innerHTML = tmp_rslt.toString();
    }
    else {
        tmp_rslt += "特定Ａ,";
        tmp_rslt += choose(array_SR, 1);
        tmp_rslt += choose(array_R, 2);
        tmp_rslt += choose(array_N, 6);
        result.innerHTML = tmp_rslt.toString();
    }
    points -= 2000;
    pts.innerHTML = points + "pt";
}

function click4() {
    if(points < 30000) return 0;
    let tmp_rslt = [];
    tmp_rslt += "特定Ａ,";
    tmp_rslt += choose(array_SR, 1);
    tmp_rslt += choose(array_R, 2);
    tmp_rslt += choose(array_N, 6);
    result.innerHTML = tmp_rslt.toString();
    points -= 30000;
    pts.innerHTML = points + "pt";
}