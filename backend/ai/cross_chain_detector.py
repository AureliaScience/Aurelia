def cross_chain_risk(interactions):
    bridge_count = sum(1 for tx in interactions if tx['via_bridge'])
    return "Risky" if bridge_count > 5 else "Safe"