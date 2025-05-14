def volatility_pulse_index(vol_data):
    pulse = max(vol_data) - min(vol_data)
    return round(pulse / (sum(vol_data)/len(vol_data)) * 100, 2)