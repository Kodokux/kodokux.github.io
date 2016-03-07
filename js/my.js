function getURLParameter(name, source) {
  console.log("getURLParameter", name, source);
  return decodeURIComponent((new RegExp('[?|&|#]' + name + '=' +
    '([^&]+?)(&|#|;|$)').exec(source) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function logout() {
  console.log('logout');
  amazon.Login.logout();
  document.cookie = "amazon_Login_accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie = "amazon_Login_state_cache=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}
