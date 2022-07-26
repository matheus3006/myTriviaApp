export interface ICategory {
  "Arts & Literature" : [Tags]
  "Film & TV": [Tags]
  "Food & Drink": [Tags]
  "General Knowledge": [Tags]
  "Geography": [Tags]
  "History": [Tags]
  "Music": [Tags]
  "Science": [Tags]
  "Society & Culture": [Tags]
  "Sport & Leisure": [Tags]
}

interface Tags{
  [propName: string]: string;
}
