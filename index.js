var isHotOutside = true;
var isWeekDay = false;
var hasMoneyInPocket = true;

var costOfMilk = 4;
var moneyInWallet = 20;
var thirstLevel = 5;

var shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
console.log(shouldBuyIceCream);

var willGoSwimming = isHotOutside && !isWeekDay;
console.log(willGoSwimming);

var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekDay;
console.log(isAGoodDay);

var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 4 * 2;
console.log(willBuyMilk);

