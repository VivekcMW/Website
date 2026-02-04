#!/usr/bin/env python3
import json
import os

os.chdir('messages')
languages = ['en', 'zh', 'es', 'fr', 'de', 'pt', 'ja', 'ko', 'ar', 'hi', 'ms', 'id', 'th', 'vi']

print("Verifying brandsPage translations in all language files:\n")
for lang in languages:
    with open(f'{lang}.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    if 'landingPage' in data and 'brandsPage' in data['landingPage']:
        keys = list(data['landingPage']['brandsPage'].keys())
        print(f"✓ {lang:3s}.json: {len(keys)} sections - {', '.join(keys)}")
    else:
        print(f"✗ {lang:3s}.json: Missing landingPage.brandsPage")
