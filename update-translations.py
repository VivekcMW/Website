import json
import os

# Change to messages directory
os.chdir('messages')

# Read English source
with open('en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)

# Extract the sections we need - brandsPage is under landingPage
sections_to_copy = ['platform', 'trustBar', 'journey', 'features', 'howItWorks']
brands_page_sections = {key: en_data['landingPage']['brandsPage'][key] for key in sections_to_copy}

# Languages to update (excluding en, zh, and es which are already done)
languages = ['fr', 'de', 'pt', 'ja', 'ko', 'ar', 'hi', 'ms', 'id', 'th', 'vi']

for lang in languages:
    file_path = f'{lang}.json'
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Add the sections to brandsPage
        if 'landingPage' in data and 'brandsPage' in data['landingPage']:
            data['landingPage']['brandsPage'].update(brands_page_sections)
        else:
            print(f"Warning: {lang}.json doesn't have landingPage.brandsPage")
            continue
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"✓ Updated {lang}.json")
    except Exception as e:
        print(f"✗ Error updating {lang}.json: {e}")

print("\n✅ All language files updated successfully!")
