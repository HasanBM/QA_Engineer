const { chromium } = require('playwright');
const { fetchArticles } = require('./index'); 
const { describe } = require('node:test');
const { expect } = require('playwright/test');

describe('Hacker News Newest Page', () => {
    let articles;

    beforeAll (async () => {
        articles = await fetchArticles();

    });

    test('fetches exactly 100 articles', () => {
        expect(articles.length).toBe(100);
    });

    test('articles should be sorted in ascending order of age')
    const sortedArticles = [...articles];
    sortedArticles.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    for (let i = 0; i < articles.length - 1; i++) {
        expect(new Date(articles[i].timestamp)).toBeGreaterThan(new Date(articles[i + 1].timestamp));
        
    }});


