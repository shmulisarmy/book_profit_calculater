function calculateProfit() {
    var number_of_pages = parseInt(document.getElementById('number_of_pages').value);
    var minutes_to_make_page = parseInt(document.getElementById('minutes_to_make_page').value);
    var price_to_make_per_book = parseInt(document.getElementById('price_to_make_per_book').value);
    var book_sell_price = parseInt(document.getElementById('book_sell_price').value);
    var quantity = parseInt(document.getElementById('quantity').value);
    var hours_per_week = parseInt(document.getElementById('hours_per_week').value);
    var extra_costs = parseInt(document.getElementById('extra_costs').value);

    var minutes_to_make_book = number_of_pages * minutes_to_make_page;
    var hours_to_make_book = Math.floor(minutes_to_make_book / 60);
    var weeks_to_make = Math.floor(hours_to_make_book / hours_per_week);
    var days_to_make = Math.floor(hours_to_make_book % (weeks_to_make * hours_per_week) / hours_per_week * 7);

    var per_book_profit = book_sell_price - price_to_make_per_book;
    var gross = per_book_profit * quantity;
    var profit = gross - extra_costs;
    var perweek_profit = Math.floor(profit / weeks_to_make);

    var resultMessage = `
      Per Book Profit: $${per_book_profit}<br>
      Gross Profit: $${gross}<br>
      Total Profit: $${profit}<br>
      Per Week Profit: $${perweek_profit}<br>
      Completion Time: ${weeks_to_make} weeks and ${days_to_make} days
    `;

    document.getElementById('result').innerHTML = resultMessage;
  }