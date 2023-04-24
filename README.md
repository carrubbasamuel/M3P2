# M3P2

Clona la repo esistente:

git clone <url_repo_esistente>

Crea una nuova branch:

git checkout -b <nome_nuova_branch>

Effettua le modifiche necessarie e committale alla nuova branch:

git add .

git commit -m "descrizione del commit"

Torna alla branch principale:

git checkout <nome_branch_principale>

Crea una nuova branch dalla branch principale:

git checkout -b <nome_nuova_branch_principale>

Unisci la nuova branch creata dalla branch principale:

git merge <nome_nuova_branch>

Risolvi eventuali conflitti tra le due branch.

Aggiungi le modifiche risolte:

git add .

Fai il commit delle modifiche risolte:

git commit -m "Risoluzione conflitti tra branch"

Fai il push delle modifiche sulla nuova branch principale:

git push origin <nome_nuova_branch_principale>

Nota: Questi comandi assumono che tu abbia già configurato correttamente Git e abbia un account GitHub o un altro servizio di hosting Git simile.
