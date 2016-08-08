var expect = chai.expect;

describe('Chapter 1 Challenges...', function() {
	describe('challenge 1.1 Is Unique', function() {
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
	describe('challenge 1.2 Check Permutation', function() {
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
	describe('challenge 1.3 URLify', function() {
		it('should return a string with %20 in place of spaces', function() {
			expect(urlify('the dog and cat', 15)).to.eql('the%20dog%20and%20cat');
			expect(urlify('jessica ayunani', 15)).to.eql('jessica%20ayunani');
		});
		it('should return a string that is the length of the number input', function() {
			expect(urlify('the cat   ', 7)).to.eql('the%20cat');
			expect(urlify('   hi there')).to.eql('hi%20there');
		});
	});
	describe('challenge 1.4 Palindrome Permutation', function() {
		it('should return true if the string is a permutation of a palindrome', function() {
			expect(palindromePerm('tact coa')).to.eql(true);
			expect(palindromePerm('aaccrre')).to.eql(true);
		});
		it('should return false in all other cases', function() {
			expect(palindromePerm('racecars')).to.eql(false);
			expect(palindromePerm('jessica')).to.eql(false);
		});
	});
	describe('challenge 1.5 One Away', function() {
		it('should return true if str2 is one character removed from str1', function() {
			expect(oneAway('pale', 'ple')).to.eql(true);
			expect(oneAway('dogs', 'dgs')).to.eql(true);
		});
		it('should return true if str2 is str1 plus one more character', function() {
			expect(oneAway('marker', 'markers')).to.eql(true);
			expect(oneAway('lympics', 'olympics')).to.eql(true);
		});
		it('should return true if str2 is str1 with one letter replaced', function() {
			expect(oneAway('dogs', 'logs')).to.eql(true);
			expect(oneAway('abcd', 'abcc')).to.eql(true);
		});
		it('should return false for all other cases', function() {
			expect(oneAway('pale', 'bake')).to.eql(false);
			expect(oneAway('hello', 'hi')).to.eql(false);
		});
	});
	describe('challenge 1.6 String Compression', function() {
		it('should return a compressed version of a string with counts of letters', function() {
			expect(strCompression('hhheeeyyyy')).to.eql('h3e3y4');
			expect(strCompression('aabcccccaaa')).to.eql('a2b1c5a3');
		});
		it('should return the original string if the compressed string is longer than the original string', function() {
			expect(strCompression('dogss')).to.eql('dogss');
			expect(strCompression('jessica')).to.eql('jessica');
		});
	});
});