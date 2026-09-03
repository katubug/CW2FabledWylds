§6Chapter 3: Subchapters

§7Subchapters act as a clean, expandable dropdown list of buttons nested right inside the left sidebar navigation menu.
§6---
§7Step 1: The @submenu Tag
§7At the very top of your main chapter file, insert the following line: §6@submenu: file1, file2, file3
§6---
§7EXAMPLE:
§7Inside the §6chapter_3.md§7 file, you specify: §6@submenu: sub_demo1, sub_demo2, sub_demo3
§6---
§7Step 2: Create the Files on Disk
§7Navigate to your book's folder on your hard drive at:
§6`config/guide/books/[book_id]/chapters/`
§7And create the corresponding text `.md` files:

    §6• sub_demo1.md
    §6• sub_demo2.md
    §6• sub_demo3.md
§6---
§cImportant Notes:

§7• The names written after the §6@submenu:§7 tag must §6strictly match§7 the actual file names on your disk.
§7• You §6do not need§7 to register these nested subchapters inside the main §6index.md§7 file — the system will discover them automatically.
§7• Subchapters will render inside the sidebar with a neat indent and will smoothly expand whenever the main chapter button is clicked.

@submenu: sub_demo1, sub_demo2, sub_demo3