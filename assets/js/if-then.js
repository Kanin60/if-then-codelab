
// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if (A == B - D - D) {
    console.log('statement true!');
}

//opgave 2: skrive en If then statement der vurderer om A er større end B.
if (A > B) {
    console.log('A er større end B');
} else{
    console.log('A er mindre end B')
}

//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B

if (A <= B) {
    console.log('A er mindre end eller lig med B');
} else{
    console.log('A er større end eller lig med B')
}

//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.
if (B === C) {
    console.log('True! B og C har samme type og værdi');
} else{
    console.log('False! B og C har samme værdi, men ikke type')
}

//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.
if (B == C) {
    console.log('True! B og C har samme værdi');
}

//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE. 


if(E == A){
    console.log("True! E er lig med A");
}
else if(B == C){
console.log("True! B er lig med C");
}
else{
    console.log("False");
}