import sqlite3
import sqlite3
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, Float

app = Flask(__name__)

class Base(DeclarativeBase):
    pass

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///new-books-collection.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(model_class=Base)
db.init_app(app)

class Book(db.Model):
    __tablename__ = 'books'
    id = db.Column(db.Integer, primary_key=True)  # AUTO_INCREMENT is default in SQLite
    title = db.Column(db.String(255), nullable=False)
    author = db.Column(db.String(255), nullable=False)
    rating = db.Column(db.Float)

    def __repr__(self):
        return f'<Book {self.title}>'

with app.app_context():
    db.create_all()
    print("Database tables created!")

with app.app_context():
    try:
        # Adding a new book to the database
        new_book = Book(title="Harry Potter", author="J. K. Rowling", rating=9.3)
        db.session.add(new_book)
        db.session.commit()
        print("New book added successfully!")

    except Exception as e:
        # Catch any exceptions and print them for debugging
        print(f"Error adding book: {e}")

# Verify that the book was added by querying the database
with app.app_context():
    books = Book.query.all()
    print("All books in the database:")
    for book in books:
        print(book)

# db = sqlite3.connect("books-collection.db")
# cursor = db.cursor()
# cursor.execute("CREATE TABLE books (id INTEGER PRIMARY KEY, title varchar(250) NOT NULL UNIQUE, author varchar(250) NOT NULL, rating FLOAT NOT NULL)")
# cursor.execute("INSERT INTO books VALUES(1, 'Harry Potter', 'J. K. Rowling', '9.3')")
# db.commit()