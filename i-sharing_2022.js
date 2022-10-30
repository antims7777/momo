function sleep(delay) {
    for (var t = Date.now(); Date.now() - t <= delay;);
}

// game
fetch("https://www.i-sharing.com.tw/game/sharetimeDarw",{"headers":{"Content-Type":"application/json;charset=utf-8",},"method": "POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/game/sharetimeResult",{"headers":{},"method":"POST",});
sleep(1000);
// sendcard
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub4e-635682ea295d53-73238982","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub43-6356839f9e2bd3-25036601","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub6s-63568400c6a7c1-61107100","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lquacu-6356842ed135d4-11661272","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub6d-635684513e3303-16478031","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub4i-635684731f56b6-68209063","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lquact-63568492b0d2e3-36063740","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lquacd-635684b076d301-19107242","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub1x-635684ce7fbe24-19792261","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/sendcard/",{"credentials":"include","headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=line&sendCardId=4lqub4i-635684e70bf5e2-87108671","method":"POST",});
sleep(1000);
// puzzle (10/24)
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=cosmed&puzzle_id=cosmed-puzzle-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=cosmed&puzzle_id=cosmed-puzzle-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=beautydiary&puzzle_id=beautydiary-puzzle-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=beautydiary&puzzle_id=beautydiary-puzzle-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=ksolite&puzzle_id=ksolite-puzzle-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/puzzle",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"bu_site_id=ksolite&puzzle_id=ksolite-puzzle-1","method":"POST",});
sleep(1000);
// collect news
// cosmed
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=cosmed-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=cosmed-news-2","method":"POST",});
sleep(1000);
// beautydiary
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=beautydiary-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=beautydiary-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=beautydiary-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=beautydiary-news-4","method":"POST",});
sleep(1000);
// Ksolite
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ksolite-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ksolite-news-4","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ksolite-news-5","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ksolite-news-6","method":"POST",});
sleep(1000);
// rosebeauty
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=rosebeauty-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=rosebeauty-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=rosebeauty-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=rosebeauty-news-4","method":"POST",});
sleep(1000);
// reisuimilk
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=reisuimilk-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=reisuimilk-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=reisuimilk-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=reisuimilk-news-4","method":"POST",});
sleep(1000);
// 7eleven
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=7eleven-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=7eleven-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=7eleven-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=7eleven-news-4","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=7eleven-news-5","method":"POST",});
sleep(1000);
// pec21c
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=pec21c-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=pec21c-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=pec21c-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=pec21c-news-4","method":"POST",});
sleep(1000);
// starbucks
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=starbucks-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=starbucks-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=starbucks-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=starbucks-news-4","method":"POST",});
sleep(1000);
// MH
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=MH-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=MH-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=MH-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=MH-news-4","method":"POST",});
sleep(1000);
// ustyletp
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ustyletp-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=ustyletp-news-2","method":"POST",});
sleep(1000);
// dreammall
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=dreammall-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=dreammall-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=dreammall-news-4","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=dreammall-news-5","method":"POST",});
sleep(1000);
// onemorecup
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=onemorecup-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=onemorecup-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=onemorecup-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=onemorecup-news-4","method":"POST",});
sleep(1000);
// bagel
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=bagel-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=bagel-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=bagel-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=bagel-news-4","method":"POST",});
sleep(1000);
// books
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=books-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=books-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=books-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=books-news-4","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=books-news-5","method":"POST",});
sleep(1000);
// semeur
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=semeur-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=semeur-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=semeur-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=semeur-news-4","method":"POST",});
sleep(1000);
// AB
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=AB-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=AB-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=AB-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=AB-news-4","method":"POST",});
sleep(1000);
// unibread
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=unibread-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=unibread-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=unibread-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=unibread-news-4","method":"POST",});
sleep(1000);
// smile
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=smile-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=smile-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=smile-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=smile-news-4","method":"POST",});
sleep(1000);
// coldstone
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=coldstone-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=coldstone-news-2","method":"POST",});
sleep(1000);
// HISCAFE
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=HISCAFE-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=HISCAFE-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=HISCAFE-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=HISCAFE-news-4","method":"POST",});
sleep(1000);
// SANTACRUZ
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=SANTACRUZ-news-1","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=SANTACRUZ-news-2","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=SANTACRUZ-news-3","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/news/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"buNewsId=SANTACRUZ-news-4","method":"POST",});
sleep(1000);
// download music
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=music&filename=isharing-song","method":"POST",});
sleep(1000);
// download wallpaper
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-01","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-02","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-03","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-04","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-05","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-06","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1920x1080-07","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-01","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-02","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-03","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-04","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-05","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-06","method":"POST",});
sleep(1000);
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=wallpaper&filename=isharing-1242x2208-07","method":"POST",});
sleep(1000);
// download video
fetch("https://www.i-sharing.com.tw/collect/info/",{"headers":{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8",},"body":"type=video&filename=isharing-video","method":"POST",});
