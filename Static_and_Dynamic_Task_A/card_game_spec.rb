require('minitest/autorun')
require('minitest/rg')
require_relative('./card_game.rb')

class CardGameTest < MiniTest::Test

  def setup()
    @card1 = Card.new("ace", 1)
    @card2 = Card.new("diamond", 2)
    @card3 = Card.new("heart", 3)
    @card4 = Card.new("spade", 4)
  end

  def test_value()
    assert_equal("ace", true)
  end


  # def test_highest_card
  #
  # end

end
