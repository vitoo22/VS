from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def index():
	return render_template('index.html', active="home")

@app.route('/places')
def map():
	return render_template('places.html', active="places")

@app.route('/travels')
def travels():
	return render_template('travels.html', active="travels")

@app.route('/blog')
def blog():
	return render_template('index.php', active="blog")

app.run(debug=True, host='0.0.0.0', port=8000)