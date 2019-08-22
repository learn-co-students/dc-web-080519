require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'tacocat'" do 
        expect(checker.is_palindrome?('tacocat')).to be(true)
    end

    it "returns false when input is 'banana'" do
        expect(checker.is_palindrome?('banana')).to be(false)
    end

    it "ignores spaces" do 
        expect(checker.is_palindrome?('madam im adam')).to be(true)
    end

    it "ignores upper/lowercase" do 
        expect(checker.is_palindrome?("Madam")).to be(true)
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("go hang a salami i'm a lasagna hog")).to be(true)
    end

    it "raises ArgumentError if input is not a String" do
        expect{checker.is_palindrome?(7)}.to raise_error ArgumentError
    end

    it "gets 2.5 when 5 / 2" do 
        expect(checker.divide_by(6, 2)).to eq(3)
    end

    it " when 5 / 0" do
        expect(checker.divide_by(5, 0)).to eq("You can't divide by zero")
    end

end