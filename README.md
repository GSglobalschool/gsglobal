# GS Global Academy — Website Admin Guide

> This README is for the school admin. It explains how to update the website by uploading files to this repository. No coding knowledge required.

---

## ⚠️ Before You Start

- Always make sure you are on the **`main` branch** before uploading anything
- Files uploaded to any other branch will **not appear on the live website**

---

## 📄 Uploading Documents & Certificates

**Folder:** `docs/certificates/`

### Rules
- Use clear, descriptive names (e.g. `Bonafide-Certificate-2025.pdf`)
- Do not use special characters like `@`, `#`, `%`, `&` in file names

### How to Upload
1. Go to the repository on GitHub
2. Click the `docs` folder → then `certificates`
3. Click **Add file** → **Upload files**
4. Drag and drop your PDF or click to browse
5. Click **Commit changes**

> The file will appear on the website automatically within a few seconds. No code changes needed.

---

## 🎓 Uploading Transfer Certificates (TCs)

**Folder:** `transfer_certificates/`

### Mandatory Naming Convention

Every TC file **must** follow this exact format:

```
StudentName_RollNo_Class_Year.pdf
```

| Part          |      Description     |    Example    |
|---------------|----------------------|---------------|
| `StudentName` | Full name, no spaces | `RahulSharma` |
| `RollNo`      | Student roll number  | `42`          |
| `Class`       | Class and section    | `10A`         |
| `Year`        | Year of leaving      | `2025`        |

### ✅ Correct Examples
- `RahulSharma_42_10A_2025.pdf`
- `PriyaVerma_07_8B_2024.pdf`
- `AmanKhan_15_12C_2025.pdf`

### ❌ Incorrect Examples (do not use)
- `Rahul Sharma TC.pdf` — spaces not allowed
- `tc_042.pdf` — missing name, class, year
- `RahulSharma.pdf` — missing roll number, class, year

### Rules
- Only upload **PDF files** (`.pdf`)
- One file per student per year
- Do not overwrite an existing TC — upload the new year as a separate file
- Double-check the roll number and class before uploading

---

## 🖼️ Uploading Gallery Images

**Folder:** `images/`

### Rules
- Accepted formats: `JPG`, `JPEG`, `PNG`, `WEBP`
- Keep file sizes **under 2 MB** for fast loading
- Use descriptive names without spaces (e.g. `sports-day-2025.jpg`)
- To control the order images appear, prefix names with numbers:
  `01-annual-function.jpg`, `02-sports-day.jpg`

---

## ❌ Common Mistakes to Avoid

- Uploading to the wrong branch — always use `main`
- Using spaces in file names
- Uploading non-PDF files to the documents or TC folders
- Missing parts in the TC file name (must have all 4: name, roll, class, year)
- Uploading images larger than 5 MB

---

## 🆘 Troubleshooting

If an uploaded file is not showing on the website:

1. Confirm the file is in the **correct folder**
2. Confirm you are on the **`main` branch**
3. Wait **1–2 minutes** and refresh the page
4. If the page still not works press Ctrl + shift + I. This will open inspect menu. Just long press refresh button and a pop-up will open. Select **Empty cache and hard refresh**. The page will show new documents. 
5. For technical issues, contact the website developer


