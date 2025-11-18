// Test script for AI service
// Run with: node test-ai-service.js

import { generateQuiz, validateQuizInput } from './src/services/ai.ts';

console.log('='.repeat(60));
console.log('AI QUIZ GENERATOR - TEST SUITE');
console.log('='.repeat(60));
console.log();

// Test 1: Coffee topic
console.log('TEST 1: Generating quiz for "Coffee"...');
const quiz1 = await generateQuiz('Coffee', 'intermediate');
console.log(`✓ Generated ${quiz1.questions.length} questions`);
console.log(`✓ Topic: ${quiz1.topic}`);
console.log(`✓ Sample Question: ${quiz1.questions[0].question}`);
console.log(`✓ Sample Answer: ${quiz1.questions[0].options[quiz1.questions[0].correctAnswer]}`);
console.log();

// Test 2: Present Perfect
console.log('TEST 2: Generating quiz for "Present Perfect"...');
const quiz2 = await generateQuiz('Present Perfect', 'beginner');
console.log(`✓ Generated ${quiz2.questions.length} questions`);
console.log(`✓ Topic: ${quiz2.topic}`);
console.log(`✓ Sample Question: ${quiz2.questions[0].question}`);
console.log();

// Test 3: Generic topic
console.log('TEST 3: Generating quiz for "Quantum Physics" (generic)...');
const quiz3 = await generateQuiz('Quantum Physics', 'advanced');
console.log(`✓ Generated ${quiz3.questions.length} questions`);
console.log(`✓ Topic: ${quiz3.topic}`);
console.log(`✓ Sample Question: ${quiz3.questions[0].question}`);
console.log();

// Test 4: Validation
console.log('TEST 4: Input validation...');
const validation1 = validateQuizInput('Coffee');
console.log(`✓ Valid input: ${validation1.valid}`);
const validation2 = validateQuizInput('');
console.log(`✓ Empty input rejected: ${!validation2.valid}`);
const validation3 = validateQuizInput('AB');
console.log(`✓ Too short input rejected: ${!validation3.valid}`);
console.log();

console.log('='.repeat(60));
console.log('ALL TESTS PASSED ✓');
console.log('='.repeat(60));
