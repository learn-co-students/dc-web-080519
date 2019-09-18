require "rest-client";
require "byebug";
require "json";

response = RestClient.get("http://localhost:3000/hello/5");

byebug;

0;
