var expect = chai.expect;

describe('Chapter 1 Challenges...', function() {
	describe('challenge 1.1 unique characters', function() {
		it('should return true if all characters are unique', function() {
			expect(uniqueChar('cat')).to.eql(true);
			expect(uniqueChar('map')).to.eql(true);
		});
		it('should return false if there is a duplicate character', function() {
			expect(uniqueChar('mapping')).to.eql(false);
			expect(uniqueChar('jessica')).to.eql(false);
		});
		it('should return false if input is not a string', function() {
			expect(uniqueChar(3)).to.eql(false);
			expect(uniqueChar(-99)).to.eql(false);
			expect(uniqueChar([])).to.eql(false);
		});
	});
	describe('challenge 1.2 reverse', function() {
		it('should return the string input reversed', function() {
			expect(reverseString('cat')).to.eql('tac');
			expect(reverseString('canada')).to.eql('adanac');
		});
		it('should return null if input is not a string', function() {
			expect(reverseString(76)).to.eql(null);
			expect(reverseString({})).to.eql(null);
		});
	});
	describe('challenge 1.3 permutation', function() {
		it('should return true if string 2 is a permutation of string 1', function() {
			expect(isPerm('cat', 'tac')).to.eql(true);
			expect(isPerm('target', 'tegrat')).to.eql(true);
		});
		it('should return false if string 2 is not a permutation of string 1', function() {
			expect(isPerm('mapping', 'maping')).to.eql(false);
			expect(isPerm('jessica', 'ayunani')).to.eql(false);
		});
		it('should return false if either inputs are not strings', function() {
			expect(isPerm('1', 'cat')).to.eql(false);
			expect(isPerm('82', [])).to.eql(false);
		});
	});
});