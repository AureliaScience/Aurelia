from flask import Blueprint, jsonify

data_bp = Blueprint("data_feed", __name__)

@data_bp.route("/live-feed")
def feed():
    # Static data feed example
    return jsonify({"token": "ABC", "volume": 120000, "trend": "Uptrend"})