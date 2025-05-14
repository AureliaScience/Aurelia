def analyze_wallet_chain(wallet_activities):
    pattern_count = sum(1 for w in wallet_activities if w['sequence'] == 'buy-hold-sell')
    if pattern_count > 10:
        return "High Smart Signal Activity"
    return "Low Signal"