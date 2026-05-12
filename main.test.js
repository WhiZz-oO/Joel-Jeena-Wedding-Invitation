import { describe, it, expect } from 'vitest';
import { calculateTimeRemaining } from './main.js';

// Unit tests for Joel & Jeena Wedding Countdown
describe('Countdown Logic', () => {
    it('calculates remaining time correctly', () => {
        const targetDate = new Date('May 13, 2026 11:00:00').getTime();
        const now = new Date('May 12, 2026 11:00:00').getTime(); // Exactly 1 day before
        
        const result = calculateTimeRemaining(targetDate, now);
        
        expect(result).toEqual({
            days: 1,
            hours: 0,
            minutes: 0,
            seconds: 0
        });
    });

    it('returns null if the date has passed', () => {
        const targetDate = new Date('May 13, 2026 11:00:00').getTime();
        const now = new Date('May 14, 2026 11:00:00').getTime();
        
        const result = calculateTimeRemaining(targetDate, now);
        
        expect(result).toBeNull();
    });

    it('calculates complex remaining time correctly', () => {
        const targetDate = new Date('May 13, 2026 11:00:00').getTime();
        // 2 days, 3 hours, 4 minutes, 5 seconds before
        const diff = (2 * 24 * 60 * 60 * 1000) + (3 * 60 * 60 * 1000) + (4 * 60 * 1000) + (5 * 1000);
        const now = targetDate - diff;
        
        const result = calculateTimeRemaining(targetDate, now);
        
        expect(result).toEqual({
            days: 2,
            hours: 3,
            minutes: 4,
            seconds: 5
        });
    });
});
