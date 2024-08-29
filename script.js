document.addEventListener("DOMContentLoaded", () => {
    fetch('ufconf.json')
        .then(response => response.json())
        .then(ufconf => {
            const userId = ufconf.userId;
            const apiBaseUrl = ufconf.apiBaseUrl;
            const apiPhoto = ufconf.apiPhoto;
            const apiUrl = `${apiBaseUrl}${userId}`;
            
            console.log('ufconf:', ufconf);
            document.querySelector("img").src = `${apiPhoto}`;
            
            return fetch(apiUrl);
        })
        .then(response => response.json())
        .then(userData => {
            console.log('User Data:', userData); //Hata ayıklama
            document.getElementById("username").textContent = userData.username || "Kullanıcı adı bulunamadı";
        })
        .catch(error => {
            console.error("Hata: API çağrısı veya ufconf.json okuma başarısız oldu", error);
        });
});