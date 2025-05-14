def detect_micro_pump(price_series):
    recent_jump = price_series[-1] - price_series[-3]
    if recent_jump > price_series[-3] * 0.2:
        return "Micro Pump Detected"
    return "Normal"