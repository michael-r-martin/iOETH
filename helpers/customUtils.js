function shouldFetchViaENS(addressOrENS) {
	if (addressOrENS.includes(".eth") == false) {
        return false;
    } else {
        return true;
    }
}

module.exports = { shouldFetchViaENS }