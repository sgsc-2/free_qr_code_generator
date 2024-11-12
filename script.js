// Function to generate QR Code
function generateQRCode() {
    let websiteInput = document.getElementById("websiteInput").value;
    let qrcodeContainer = document.getElementById("qrcode");

    // Clear previous QR code if any
    qrcodeContainer.innerHTML = "";

    // Create new QR code if input is provided
    if (websiteInput.trim()) {
        new QRCode(qrcodeContainer, {
            text: websiteInput,
            width: 150,
            height: 150,
        });
    } else {
        alert("Please enter a URL.");
    }
}

// Function to download the generated QR code as an image
function downloadQRCode() {
    const qrcode = document.getElementById("qrcode").querySelector("img");
    if (qrcode) {
        const link = document.createElement("a");
        link.href = qrcode.src;
        link.download = "qrcode.png";
        link.click();
    } else {
        alert("Please generate a QR code first.");
    }
}

// Event listeners for buttons
document.getElementById("generateBtn").addEventListener("click", generateQRCode);
document.getElementById("downloadBtn").addEventListener("click", downloadQRCode);
