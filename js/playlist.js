$(document).ready(function(){
    var url = "https://api.spotify.com/v1/me/top/tracks?limit=10";
    var token = "BQDskiHnSXRHr7enn9kCM3UwKJcw8cIUAnhv0SoMq65bwos9HX2MpqgbbyTINze20W3M022h8goTpG7LeO3LMlLtSu1PkJMM0auiWBHAMLNEwqu2u7nKjXMPnD5Yb47PtM6QnCF33Wo5UF5YYp3AZSGJtSmFzhR2u5DBsSJ1Tj1XjVluu0-spBZTAOwiaw";
    var authHeader = "Bearer  " + token;
    
    fetch(url, {
        mode: "cors",
        header: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": authHeader
        }})
        .then(response => response.json())
        .then(json => console.log(json));
})