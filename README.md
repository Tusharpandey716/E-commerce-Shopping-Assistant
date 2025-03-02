# 🛍️ AI-Powered E-Commerce Shopping Assistant

An AI-driven **E-Commerce Assistant** that enables users to **search for products intelligently** by leveraging **AI-generated embeddings** and **vector-based retrieval**.

---

## 🚀 Features

✅ **Fetch Product Data**: Retrieves product information from an external API.  
✅ **AI-Powered Search**: Uses **ChromaDB** to store product embeddings and retrieve the most relevant results.  
✅ **Fast & Scalable**: Built with **FastAPI**, ensuring speed and high performance.  
✅ **CORS Enabled**: Allows seamless frontend interaction.  

---

## 🛠️ Tech Stack & Libraries Used

🔹 **Backend**: FastAPI (Python)  
🔹 **Vector Database**: ChromaDB (Persistent Storage)  
🔹 **Text Embeddings**: Sentence Transformers (`all-MiniLM-L6-v2`)  
🔹 **API Requests**: `requests` (Fetches product data from Fake Store API)  
🔹 **CORS Support**: Enabled for frontend communication  

---

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/E-Commerce-Assistant.git
cd E-Commerce-Assistant
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
Open your browser and visit: http://127.0.0.1:8000/docs for interactive API documentation.
