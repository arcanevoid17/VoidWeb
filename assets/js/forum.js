// forum.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Define forum categories, topics, and posts schema
const Category = mongoose.model('Category', { name: String });
const Topic = mongoose.model('Topic', { title: String, category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } });
const Post = mongoose.model('Post', { title: String, content: String, topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' } });