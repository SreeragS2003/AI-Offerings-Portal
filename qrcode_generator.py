import qrcode
import os
from dotenv import load_dotenv

load_dotenv()

url = os.getenv("WEBSITE_URL")

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=20,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

img = qr.make_image()
img.save("website-qr.png")