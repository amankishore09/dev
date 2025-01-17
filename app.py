from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/get-rate')
def get_rate():
    # Simulate scraping or use a dummy value for demonstration
    url = 'https://www.x-rates.com/calculator/?from=USD&to=INR&amount=1'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    main_result = soup.find('span', class_='ccOutputRslt')
    integer_part = main_result.contents[0].strip()
    return jsonify({'rate': float(integer_part.replace(',', ''))})

if __name__ == '__main__':
    app.run(debug=True)

