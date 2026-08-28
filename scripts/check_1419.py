import json

path = r'E:\Antigravity\Website\Backup_Kas5A_Auto_20260822_1419.json'
with open(path, 'r', encoding='utf-8') as f:
    d = json.load(f)

months = [m['key'] for m in d['months']]
total_paid = 0
paid_by_month = {m: 0 for m in months}

for s in d['students']:
    for m in months:
        p = s.get('payments', {}).get(m)
        if isinstance(p, dict) and p.get('status') in (True, 'true', 'LUNAS', 1, '1'):
            total_paid += 1
            paid_by_month[m] += 1

exp_list = d.get('expenses', [])
total_exp = sum(e.get('amount', 0) for e in exp_list)

print('=== STATS FROM Backup_Kas5A_Auto_20260822_1419.json ===')
print('Total Paid:', total_paid, f'(Rp {total_paid*20000:,})')
print('Total Expenses: Rp', f'{total_exp:,}', f'({len(exp_list)} items)')
print('Saldo: Rp', f'{(total_paid*20000 - total_exp):,}')
print('Paid by month:', paid_by_month)
for idx, e in enumerate(exp_list):
    print(f"  {idx+1}. {e.get('date')} | {e.get('category')} | {e.get('description')} | Rp {e.get('amount'):,}")
