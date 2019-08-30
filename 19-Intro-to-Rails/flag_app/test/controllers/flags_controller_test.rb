require 'test_helper'

class FlagsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get flags_index_url
    assert_response :success
  end

  test "should get show" do
    get flags_show_url
    assert_response :success
  end

end
