export const random_message = (username) => {

 let messages = [
  `Welcome back ${username}! Have a nice budgeting!`,
  `Great to see you again ${username}! Keep up the good budgeting!`,
  `Hello again ${username}! Remember, every penny counts!`,
  `Welcome back, ${username}! Let's make your budget goals a reality!`,
  `Happy to see you again, ${username}! Keep up the good work with your budgeting!`,
  `Great to have you back, ${username}! Let's stay on track with your budget together!`,
  `Welcome back, ${username}! Remember, budgeting is not about restricting yourself, but about giving yourself financial freedom.`,
  `Good to see you again, ${username}! Every budgeting success story starts with small steps.`,
  `Welcome back, ${username}! Keep calm and budget on!`,
  `Great to have you here again, ${username}! Remember, budgeting is the first step towards financial independence.`,
  `Welcome back, ${username}! Keep your eye on the prize and let's reach your financial goals together.`,
  `Happy to see you again, ${username}! Remember, budgeting is not a chore, but a habit that brings financial security.`,
  `Welcome back, ${username}! A little budgeting each day will go a long way towards reaching your financial dreams.`,
  `Good to have you here again, ${username}! Remember, budgeting is not about sacrificing what you love, but about finding ways to afford it.`,
  `Welcome back, ${username}! Keep track of your spending and let's make every dollar count.`,
  `Great to see you again, ${username}! Remember, budgeting is not a punishment, but a tool for financial empowerment.`,
 ]

 const random_index = Math.floor(Math.random() * messages.length)

 return messages[random_index]



}


