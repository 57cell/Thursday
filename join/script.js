document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("dataForm");
    const submitButton = form.querySelector('input[type="submit"]');

    if (localStorage.getItem('formSubmitted')) {
        submitButton.disabled = true;
        submitButton.value = "You've already joined the Council!";
        submitButton.classList.add('already-submitted');
    } else {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent the form from submitting normally
            submitButton.disabled = true;  // Disable the button here

            if (!localStorage.getItem('formSubmitted')) {
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value
                };

                const encryptedData = await encryptData(formData);
                sendEncryptedDataToJSONBin(encryptedData);
            }
        });
    }
});

const JSONBIN_API_KEY = '$2a$10$S5kvh/Lik3W4JvpaCHg8s./yZ6ACCUOObXG51TKl3A8.2KSm6y13e';
const PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEZQzdBhYJKwYBBAHaRw8BAQdAP5Wd3CF0D6euYzzIesQcZY5bGPS7jvI9
3GZHKsSzekXNM3YwZmYzdjNvdGF4YjBhMzJ5Zmd5IDxjYXJkaW5hbEB0aHVy
c2RheWNvdW5jaWwub3JnPsKMBBAWCgAdBQJlDN0GBAsJBwgDFQgKBBYAAgEC
GQECGwMCHgEAIQkQD8NJ9qAokSoWIQSuAvPI9nCn7kXK+k8Pw0n2oCiRKqiT
AP0SBJR+RuIVS+UTxOkrrxPWj/ZLs3IH6xk2MFl3l4mQmwEAkDpPQ/cwdvHp
u/tdNXAwyIkSfckteSd7/OleKTpRywrOOARlDN0GEgorBgEEAZdVAQUBAQdA
3ewRxDOuNWqJY2QwdVZvq0XkqVswvWLjkSBSx3nlNgEDAQgHwngEGBYIAAkF
AmUM3QYCGwwAIQkQD8NJ9qAokSoWIQSuAvPI9nCn7kXK+k8Pw0n2oCiRKkUf
AQDvTFD6mW43noMzZ9bXZR7JDA6U27+brgUxf+kf4mvpVQEA0O5izNw+ZN9/
7Ms8gUUdc0HNNWOAf2OAMemiwGLkCwM=
=2O+V
-----END PGP PUBLIC KEY BLOCK-----`;

async function encryptData(data) {
    const { keys: [publicKey] } = await openpgp.key.readArmored(PUBLIC_KEY);

    // Encrypting the JSON data
    const { data: encrypted } = await openpgp.encrypt({
        message: openpgp.message.fromText(JSON.stringify(data)),
        publicKeys: [publicKey]
    });

    return encrypted;
}

function sendEncryptedDataToJSONBin(encryptedData) {
    fetch('https://api.jsonbin.io/v3/b', {
        method: 'POST',
        body: JSON.stringify({
            record: encryptedData
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': JSONBIN_API_KEY,
            'X-Bin-Name': 'Form Response',
            'X-Bin-Private': true  // Setting the bin as private, adjust if required
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you! Welcome to the Thursday Council!');
        localStorage.setItem('formSubmitted', 'true');
        location.reload();
    });
}
