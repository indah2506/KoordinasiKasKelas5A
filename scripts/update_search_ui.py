import os

html_path = r"E:\Antigravity\Website\public\index.html"
with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
    html = f.read()

# Locate tab-pembayaran
target = '<h2 class="section-title"><i class="fa-solid fa-wallet"></i> Matrix Pembayaran Kas Bulanan (T.A 2026–2027)</h2>'
idx = html.find(target)

if idx != -1:
    # Find table-filter-bar inside this card
    bar_start = html.find('<div class="table-filter-bar">', idx)
    if bar_start != -1:
        search_box_html = '''<div class="table-filter-bar">
            <div class="search-box">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <input type="text" id="searchMatrixInput" placeholder="Cari nama siswa di matriks..." oninput="app.renderPaymentMatrix()">
            </div>'''
        
        # Replace only this instance
        html = html[:bar_start] + search_box_html + html[bar_start+len('<div class="table-filter-bar">'):]
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(html)
        print("SUCCESS: Added searchMatrixInput to index.html!")
    else:
        print("WARNING: table-filter-bar not found in tab-pembayaran")
else:
    print("WARNING: section title not found in index.html")
