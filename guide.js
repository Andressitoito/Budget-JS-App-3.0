const done = "done";

const items_to_prop_digging_CATEGORY = {
	CategoryList: done,
	CategoryActions: "",
	CategoryBalance: "",
	CategoryBaseAmount: "",
	CateogryCurrentBudget: done,
	CategoryDetails: "",
	CategoryItem: done,
	CategoryName: "",
};

const items_to_prop_digging_Transactions = {
	TransactionItem: done,
	TransactonList: done,
};

const items_to_prop_digging_MODALS = {
	addNewCategory: "",
	deleteAllTransactions: "",
	deleteTrasaction: "",
	editTransaction: "",
	editBaseAmount: "",
	editCategoryName: "",
	newTransaction: "",
};

const helper_text = `
each category name in the list is coming from MainControlPanel, from a DUMMY_DATA_CATEGORY_LIST

from here to each button is given _id_category and categoryName wich is passed to a component to build a list of categories.

From each category button we can call to a redux state where we can take any data.
 

////////////////
SPENTS
////////////////
Sum all transactions with positive integers

////////////////
MAIN BUDGET
////////////////
Sum of the all categories base amounts and ALSO all NEGATIVE transactions

How could I calculate the main base amount taking in count these three parameters?

Taking in count that REMAINING is a NEGATIVE number inserted in a input to reference in the formula of the code, as an INCOME from last month.

Example: 

base_amount_1 = 30000
remaining_from_last_month = -20000

final_base_amount = base_amount_1 - remaining_from_last_month
final_base_amount = 30000 - (-20000)
final_base_amount = 50000

SUM_BASES = sum of all base budget per month
REMAINING = is a NEGATIVE number inserted in a input to reference in the formula of the code, as an INCOME.
SPENT = spent until today

Example

SUM_REMAINING_BASES -250000
SUM_BASES 127000
SUM_SPENT  150314

If remaining_from_last_month

If SUM_REMAINING_BASES is now used as an income in my actual month, it would not must be taken also as a plus? Converting the negative number in positive in the formula?

Like: 

Using your example, if:

SUM_REMAINING_BASES = -250000
SUM_BASES = 127000
SUM_SPENT = 150314

Then, the main base amount wouldnt be:

main_base_amount = SUM_BASES + REMAINING + SPENT
main_base_amount = 127000 + 250000
main_base_amount = 377000

Also, rest for the month:

actual_remaining = main_base_amount - SPENT
actual_remaining = 377000 - 150314
actual_remaining = 226686

Could you check my logic, please?


Vision
Taste
Smell
Tacto
Mind
Audition

Mona (transfer)
Alaya (hard disk all past lives)






`



/* 
google ClientID

983327132955-cv05uapcc4c4t6ieea8tsi9u6k5juo33.apps.googleusercontent.com

mongo 1Zqq8lWA2zwwkJrr

google Client Secret

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


*/

/* 
BUDGET APP 3.0

CLIENT ID
270888240866-9ngld0ma7mg91h5or77rv7607bl7eb5d.apps.googleusercontent.com

CLIENT SECRET
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

*/


   // const result = await client.collection('Users')

   // const resultado = await client.admin().listDatabases()
   // console.log(result)
   // console.log(resultado)


