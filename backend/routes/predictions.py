from flask import Blueprint, jsonify
from ai.trend_predictor import predict_trend

predict_bp = Blueprint("predictions", __name__)

@predict_bp.route("/predict-token")
def predict():
    result = predict_trend([100000, 120000, 150000], [400000, 600000, 700000], [14, 18, 19])
    return jsonify({"prediction": result})